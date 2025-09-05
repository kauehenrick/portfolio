import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { Toaster } from 'sonner';
import './i18n';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })


createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </>
)

