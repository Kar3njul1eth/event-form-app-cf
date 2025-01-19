import { Meta, Story } from '@storybook/vue3';
import CFSpinner from '@/components/Atoms/CFSpinner/CFSpinner.vue';

export default {
  title: 'Atoms/CFSpinner',
  component: CFSpinner
} as Meta<typeof CFSpinner>;

const Template: Story<typeof CFSpinner> = () => ({
  components: { CFSpinner },
  template: '<CFSpinner />'
});

export const Default = Template.bind({});