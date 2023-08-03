import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../../../colors";
import { Text } from "../../atoms/Text/Text";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Small: Story = {
  render: (args) => (
    <Modal {...args} title="Modal" handleClose={() => ""}>
      <div
        style={{
          border: `2px solid ${colors.gray1}`,
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
        }}
      >
        <Text $weight="bold" $color="gray1">
          Modal content goes here...
        </Text>
      </div>
    </Modal>
  ),
};
