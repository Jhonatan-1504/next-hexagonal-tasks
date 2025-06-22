import { redirect } from 'next/navigation'

export default function EditTaskPage(){
  redirect('/tasks?page=1')
}