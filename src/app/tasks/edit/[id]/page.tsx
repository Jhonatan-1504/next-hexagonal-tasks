import TaskForm from "@/libs/shared/components/tasks/TaskForm";
import TaskkBackButton from "@/libs/shared/components/tasks/TaskkBackButton";
import Title from "@/libs/shared/ui/Title";

const EditTasksPage = () => {
  return (
    <>
      <TaskkBackButton />

      <Title>Edit tasks</Title>

      <TaskForm type="edit" />
    </>
  );
};

export default EditTasksPage;
