import { Meta, Story } from '@storybook/vue3';
import CFFileUpload from '@/components/Atoms/CFFileUpload/CFFileUpload.vue';

export default {
  title: 'Atoms/CFFileUpload',
  component: CFFileUpload,
  argTypes: {
    id: {
      control: { type: 'text' }
    },
    accept: {
      control: { type: 'text' }
    }
  }
} as Meta<typeof CFFileUpload>;

const Template: Story<typeof CFFileUpload> = (args) => ({
  components: { CFFileUpload },
  setup() {
    return { args };
  },
  template: '<CFFileUpload v-bind="args">Upload File</CFFileUpload>'
});

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  id: 'image-upload',
  accept: 'image/jpeg, image/png'
};