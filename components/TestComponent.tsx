import React from 'react'
import {useRouter} from 'sanity/router'
import {Button} from '@sanity/ui'

const TestComponent = () => {
  const router = useRouter()

  const handleCreatePage = () => {
    router.navigateIntent('create', {
      type: 'page',
      template: "page-template",
      params: {
        title: "Test Page",
        test: "Page params from navigate Intent"
      }
    })
  }

  const handleCreatePageWithTemplate2 = () => {
    router.navigateIntent('create', {
      type: 'page',
      template: "page-template-2",
      params: {
        title: "Test Page 2",
        test: "Page params from navigate Intent for template 2"
      }
    })
  }

  return (
    <div>
      <h1>Hello World from Test Component!</h1>
      <Button 
        tone="primary" 
        onClick={handleCreatePage}
      >
        Create Page with template
      </Button>

      <Button 
        tone="primary" 
        onClick={handleCreatePageWithTemplate2}
      >
        Create Page with template 2
      </Button>
    </div>
  )
}

export default TestComponent