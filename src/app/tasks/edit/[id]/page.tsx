import TaskForm from "@/libs/shared/components/tasks/TaskForm";
import TaskBackButton from "@/libs/shared/components/tasks/TaskBackButton";
import Title from "@/libs/shared/ui/Title";

const EditTasksPage = () => {
  return (
    <>
      <TaskBackButton />

      <Title>Edit tasks</Title>

      <TaskForm type="edit" />
    </>
  );
};

export default EditTasksPage;
