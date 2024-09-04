import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

interface SizeOption {
  sizeId: string;
  priceAdjustment: number;
  isHidden: number;
}

interface FormValues {
  name: string;
  description: string;
  basePrice: number;
  category: string;
  imageURL?: string;
  stock?: number;
  isFeatured?: number;
  isHidden?: number;
  sizes: SizeOption[];
}

const productSchema = {
  name: '',
  description: '',
  basePrice: 0,
  category: '',
  imageURL: '',
  stock: 0,
  isFeatured: 0,
  isHidden: 0,
  sizes: [],
};

const sizesAvailable = [
  { sizeId: 'small', label: 'Small' },
  { sizeId: 'medium', label: 'Medium' },
  { sizeId: 'large', label: 'Large' },
];

const ProductForm: React.FC = () => {
  const { control, register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: productSchema,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sizes',
  });


  
  
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleSizeChange = (sizeId: string, isChecked: boolean) => {
    if (isChecked) {
      append({ sizeId, priceAdjustment: 0, isHidden: 0 });
    } else {
      const index = fields.findIndex((size) => size.sizeId === sizeId);
      if (index !== -1) remove(index);
    }
  };

  const selectedSizes = watch('sizes');
  console.log(selectedSizes);
  
 
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Product Name</label>
        <input
          {...register('name', { required: true })}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          {...register('description')}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Base Price</label>
        <input
          type="number"
          {...register('basePrice', { required: true })}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          {...register('category', { required: true })}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input
          {...register('imageURL')}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Stock</label>
        <input
          type="number"
          {...register('stock')}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Is Featured?</label>
        <input
          type="checkbox"
          {...register('isFeatured')}
          className="mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Is Hidden?</label>
        <input
          type="checkbox"
          {...register('isHidden')}
          className="mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Sizes</label>
        {sizesAvailable.map((size) => (
          <div key={size.sizeId} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                onChange={(e) =>
                  handleSizeChange(size.sizeId, e.target.checked)
                }
                checked={selectedSizes.some(
                  (selected) => selected.sizeId === size.sizeId
                )}
                className="form-checkbox"
              />
              <span className="ml-2">{size.label}</span>
            </label>
            {selectedSizes.some((s) => s.sizeId === size.sizeId) && (
              <div className="mt-2 pl-6">
                <label className="block text-gray-600">Price Adjustment</label>
                <Controller
                  control={control}
                  name={`sizes.${selectedSizes.findIndex(
                    (s) => s.sizeId === size.sizeId
                  )}.priceAdjustment`}
                  render={({ field }) => (
                    <input
                      type="number"
                      {...field}
                      className="mt-1 block w-full border rounded-md p-2"
                    />
                  )}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
