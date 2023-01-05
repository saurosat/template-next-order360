import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductCard, { IModelProductCard } from './ProductCard';
import { mockProductCardProps, mockProductCardProps1, mockProductCardProps2 } from './ProductCard.mocks';

export default {
    title: 'cards/products/ProductCard',
    component: ProductCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => (
    <ProductCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockProductCardProps,
} as IModelProductCard;

export const Base2x3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base2x3.args = {
    ...mockProductCardProps1,
} as IModelProductCard;

export const Base6x4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base6x4.args = {
    ...mockProductCardProps2,
} as IModelProductCard;

