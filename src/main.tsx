import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './Routes'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './shared/services/query-client.service'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  </React.StrictMode>,
)
