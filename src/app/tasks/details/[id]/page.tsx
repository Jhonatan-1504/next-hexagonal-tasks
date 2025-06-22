import TaskForm from "@/libs/shared/components/tasks/TaskForm";
import TaskBackButton from "@/libs/shared/components/tasks/TaskBackButton";
import Title from "@/libs/shared/ui/Title";

const DetailsTasksPage = () => {
  return (
    <>
      <TaskBackButton />

      <Title>Details tasks</Title>

      <TaskForm type="details" />
    </>
  );
};

export default DetailsTasksPage;
