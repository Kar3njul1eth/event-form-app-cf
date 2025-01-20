import type { Meta, Story } from '@storybook/vue3';
import CFBannerUpload from '@/components/Molecules/CFBannerUpload/CFBannerUpload.vue';

export default {
  title: 'Molecules/CFBannerUpload',
  component: CFBannerUpload,
  argTypes: {
    id: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    }
  }
} as Meta<typeof CFBannerUpload>;

const Template: Story<typeof CFBannerUpload> = (args) => ({
  components: { CFBannerUpload },
  setup() {
    return { args };
  },
  template: '<CFBannerUpload v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  id: 'banner-upload-1',
  label: 'Event Banner'
};