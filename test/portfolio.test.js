import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { engagements, projects } from '../src/data/portfolio.js'

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
    assert.match(image, /^\/gallery\/.+\.(jpg|png)$/i)
    await assert.doesNotReject(readFile(new URL(`../public${image}`, import.meta.url)))
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
