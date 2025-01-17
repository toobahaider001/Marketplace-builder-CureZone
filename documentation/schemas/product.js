const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'ID',
        description: 'A unique identifier for the product.',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'The name of the product.',
        validation: (Rule) => Rule.required().min(3).max(100).error('Product name must be between 3 and 100 characters.'),
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock',
        description: 'The number of units available for the product.',
        validation: (Rule) => Rule.required().min(0).error('Stock must be a positive number or zero.'),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'A detailed description of the product.',
        validation: (Rule) => Rule.required().min(10).error('Description must be at least 10 characters long.'),
      },
      {
        name: 'sideEffects',
        type: 'array',
        title: 'Side Effects',
        description: 'Possible side effects of the product.',
        of: [{ type: 'string' }],
        validation: (Rule) => Rule.optional().min(0),
      },
      {
        name: 'price',
        type: 'decimal',
        title: 'Price',
        description: 'The price of the product.',
        validation: (Rule) => Rule.required().min(0).error('Price must be a positive number.'),
      },
    ],
  };
  