import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostCard from '../components/cards/posts/PostCard';
import postMock from './PostCard.mocks';
export default {
    title: 'cards/posts/PostCard',
    component: PostCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof PostCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostCard> = (args) => (
    <PostCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = postMock;
