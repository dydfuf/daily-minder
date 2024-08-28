/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as InstantImport } from './routes/instant'
import { Route as EditorImport } from './routes/editor'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const InstantRoute = InstantImport.update({
  path: '/instant',
  getParentRoute: () => rootRoute,
} as any)

const EditorRoute = EditorImport.update({
  path: '/editor',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/editor': {
      id: '/editor'
      path: '/editor'
      fullPath: '/editor'
      preLoaderRoute: typeof EditorImport
      parentRoute: typeof rootRoute
    }
    '/instant': {
      id: '/instant'
      path: '/instant'
      fullPath: '/instant'
      preLoaderRoute: typeof InstantImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  EditorRoute,
  InstantRoute,
  AboutLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/editor",
        "/instant",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/editor": {
      "filePath": "editor.tsx"
    },
    "/instant": {
      "filePath": "instant.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
