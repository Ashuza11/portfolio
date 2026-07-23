import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { engagements, highlights, personal, projects, skills } from '../src/data/portfolio.js'

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('portfolio records have stable unique identifiers and useful links', () => {
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length)
  for (const project of projects) {
    assert.ok(project.title)
    assert.ok(project.description)
    assert.ok(project.live || project.github)
    assert.notEqual(project.live, project.github)
  }
})

test('every project category is represented by the project filters', async () => {
  const projectPage = await read('src/pages/ProjectsPage.jsx')
  for (const category of new Set(projects.map(project => project.category))) {
    assert.match(projectPage, new RegExp(`value: '${category}'`))
  }
})

test('facilitation events have unique image paths and existing assets', async () => {
  const images = engagements.flatMap(event => event.images)
  assert.equal(new Set(images).size, images.length)
  for (const image of images) {
    assert.match(image, /^\/gallery\/.+\.(jpg|png|webp)$/i)
    await assert.doesNotReject(readFile(new URL(`../public${image}`, import.meta.url)))
  }
})

test('experience highlights have complete content and links', () => {
  assert.ok(highlights.length >= 6)
  for (const item of highlights) {
    assert.ok(item.title)
    assert.ok(item.description)
    assert.match(item.link, /^https:\/\//)
  }
})

test('skills and community stats reflect the current portfolio', () => {
  const mobile = skills.find(group => group.category === 'Mobile').items
  const ai = skills.find(group => group.category === 'AI and ML').items
  const devops = skills.find(group => group.category === 'DevOps').items
  assert.ok(mobile.includes('React Native (Planned)'))
  assert.ok(!mobile.includes('Flutter'))
  for (const skill of ['ACE Step', 'SDXL', 'Qwen', 'Gemma', 'Whisper ASR']) assert.ok(ai.includes(skill))
  for (const skill of ['Vercel', 'Cloudflare']) assert.ok(devops.includes(skill))
  assert.ok(personal.stats.some(stat => stat.label === 'Communities Established' && stat.value === 3))
})

test('community platform profiles are available', () => {
  for (const platform of ['kaggle', 'zindi', 'hugging face']) {
    assert.match(personal.social[platform], /^https:\/\//)
    assert.ok(personal.socialHandles[platform])
  }
})

test('contact page offers direct email without a non-functional form', async () => {
  const contact = await read('src/pages/ContactPage.jsx')
  assert.match(contact, /mailto:/)
  assert.doesNotMatch(contact, /<form/)
})

test('reveal behavior responds to route changes and reduced motion', async () => {
  const reveal = await read('src/hooks/useReveal.js')
  assert.match(reveal, /\[pathname\]/)
  assert.match(reveal, /prefers-reduced-motion/)
  assert.match(reveal, /MutationObserver/)
})
