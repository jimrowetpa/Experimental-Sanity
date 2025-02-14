// @ts-nocheck
import React from 'react'
import {IntentLink} from 'sanity/router'

import {Button} from '@sanity/ui'

const TestComponent = () => {
  return (
    <div>
      <h1>Hello World from Test Component!</h1>
      <IntentLink
        intent="create"
        params={[
          {type: 'page', template: 'page-template'},
          {title: 'Test Page', test: 'Page params from navigate Intent'},
        ]}
      >
        <Button tone="primary">Create Page with template</Button>
      </IntentLink>

      <IntentLink
        intent="create"
        params={[
          {type: 'page', template: 'page-template'},
          {title: 'Test Page 2', test: 'Page params from navigate Intent for template 2'},
        ]}
      >
        <Button tone="primary">Create Page with template 2</Button>
      </IntentLink>
    </div>
  )
}

export default TestComponent
