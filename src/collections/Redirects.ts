import type { CollectionConfig } from 'payload'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'from',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'from',
      label: 'From path',
      type: 'text',
      required: true,
    },
    {
      name: 'to',
      label: 'To path',
      type: 'text',
      required: true,
    },
    {
        name: 'statusCode',
        label: 'Status Code',
        type: 'select',
        required: true,
        options: [
          { label: '301 - Moved Permanently', value: '301',},
          { label: '302 - Moved Temporarily', value: '302',},
        ],
      },
  ],
}