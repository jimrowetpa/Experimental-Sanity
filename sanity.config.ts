import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {getDefaultDocumentNode} from './deskStructure'

const schemaTemplates = [
  {
    id: 'page-template',
    title: 'Page Template',
    schemaType: 'page',
    parameters: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
      }
    ],
    value: (params: any) => {
      console.log("page-template params", params);
      
      return {
        title: params.title,
        excerpt: "Created using page-template"
      }
    }
  }
  ,
  {
    id: 'page-template-2',
    title: 'Page Template 2',
    schemaType: 'page',
    parameters: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
      }
    ],
    value: (params: any) => {
      console.log("page-template-2 params", params);
      
      return {
        title: params.title,
        excerpt: "Created using page-template-2"
      }
    }
  }
]

export default defineConfig({
  name: 'default',
  title: 'Experimentation',

  projectId: '4holgmlu',
  dataset: 'production',

  plugins: [
    structureTool({
      defaultDocumentNode: getDefaultDocumentNode,
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pages')
              .child(
                S.documentTypeList('page')
                .initialValueTemplates([
                  S.initialValueTemplateItem('page-template', {test: "test parameter"}),
                  S.initialValueTemplateItem('page-template-2', {test: "test parameter for template 2"}),
                ])
              ),            
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    templates: (prev, context) => {
      return [
        ...prev,
        ...schemaTemplates
      ]
    },
  },
})