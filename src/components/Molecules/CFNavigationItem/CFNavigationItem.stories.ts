import type { Meta, Story } from '@storybook/vue3';
import CFNavigationItem from '@/components/Molecules/CFNavigationItem/CFNavigationItem.vue';

export default {
  title: 'Molecules/CFNavigationItem',
  component: CFNavigationItem,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    isActive: {
      control: { type: 'boolean' }
    }
  }
} as Meta<typeof CFNavigationItem>;

const Template: Story<typeof CFNavigationItem> = (args) => ({
  components: { CFNavigationItem },
  setup() {
    return { args };
  },
  template: '<CFNavigationItem v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  label: 'Section 1'
};

export const Active = Template.bind({});
Active.args = {
  label: 'Section 2',
  isActive: true
};