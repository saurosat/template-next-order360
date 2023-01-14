import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextCard from "../components/cards/texts/TextCard";

export default {
    title: "cards/posts/TextCard",
    component: TextCard,
    parameters: {
        header: { control: 'text' },
        body: { control: 'text' },
    }
} as ComponentMeta<typeof TextCard>;

const Template: ComponentStory<typeof TextCard> =
    ({ header, body }) => <TextCard header={header} body={body} />;

export const Primary = Template.bind({});
Primary.args = { header: "Test header", body: "<p> aajh aasdfuh uialhsdf ajsdha oasdfa </p><p>adfavasdfavd</p>" };