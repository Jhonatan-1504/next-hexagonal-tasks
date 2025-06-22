import TaskForm from "@/libs/shared/components/tasks/TaskForm";
import TaskkBackButton from "@/libs/shared/components/tasks/TaskkBackButton";
import Title from "@/libs/shared/ui/Title";

const DetailsTasksPage = () => {
  return (
    <>
      <TaskkBackButton />

      <Title>Details tasks</Title>

      <TaskForm type="details" />
    </>
  );
};

export default DetailsTasksPage;
