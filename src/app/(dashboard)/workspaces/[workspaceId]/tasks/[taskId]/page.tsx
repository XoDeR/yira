import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import React from 'react'

const TaskIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div>Task ID</div>
  )
}

export default TaskIdPage