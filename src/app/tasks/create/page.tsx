import TaskForm from "@/libs/shared/components/tasks/TaskForm";
import TaskkBackButton from "@/libs/shared/components/tasks/TaskkBackButton";
import Title from "@/libs/shared/ui/Title";

const CreatePage = () => {
  return (
    <>
      <TaskkBackButton />

      <Title>Add tasks</Title>

      <TaskForm type="create" />
    </>
  );
};

export default CreatePage;
