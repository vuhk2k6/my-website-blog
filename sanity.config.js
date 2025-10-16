// File: sanity.config.js

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes' // Hoặc './schemas'

export default defineConfig({
  name: 'default',
  title: 'My News Blog',

  // --- Sử dụng giá trị trực tiếp để đảm bảo không có lỗi ---
  projectId: 'tg4gc2em',
  dataset: 'production',
  // --------------------------------------------------------

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
