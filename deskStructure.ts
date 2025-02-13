import TestComponent from './components/TestComponent'

export const getDefaultDocumentNode = (S, {schemaType}) => {
  if (schemaType === 'page') { // Adjust 'page' to match your document type
    return S.document().views([
      S.view.form(),
      S.view
        .component(TestComponent)
        .title('Test View')
    ])
  }
  return S.document()
}

export default () => {
  return S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems()
    ])
}
