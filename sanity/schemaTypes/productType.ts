import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "description",
      type: "blockContent",
    }),
    defineField({
      name: "price",
      title: "price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categories",
      title: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "stock",
      title: "stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
  ],

//   this part is to display on preview part of sanity
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
    },
    prepare(select) {
      return {
        title: select.title,
        media: select.media,
        subtitle: `$${select.price}`,
      };
    },
  },
});
