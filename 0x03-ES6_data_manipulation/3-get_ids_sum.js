/*eslint-disable*/
export default function getStudentIdsSum(studentList) {
  return studentList
  .map(student => student.id)
  .reduce((sum, student) => sum + student, 0);
}
