

import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"slug",
            type:"slug",
            title:"Slug",
            validation: (rule) => rule.required(),
            options:{
                source:"product.title",
                maxLength:400,
            },
    
        },
        {
            name:"inventory",
            type:"number",
            title:"Inventory",
        },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
           
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name: 'inventory',
            type: 'number',
            title: 'Inventory',
            validation: (Rule) => Rule.required().min(0), // Ensure inventory is a positive number
          },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }
    ]
})