using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Student
    {
        public Student()
        {
            Absences = new HashSet<Absence>();
            Grades = new HashSet<Grade>();
            ParentsStudents = new HashSet<ParentsStudent>();
            Remarks = new HashSet<Remark>();
        }

        public Guid StudentId { get; set; }
        public Guid? ClassGroup { get; set; }
        public Guid? School { get; set; }

        public virtual Classgroup ClassGroupNavigation { get; set; }
        public virtual School SchoolNavigation { get; set; }
        public virtual User StudentNavigation { get; set; }
        public virtual ICollection<Absence> Absences { get; set; }
        public virtual ICollection<Grade> Grades { get; set; }
        public virtual ICollection<ParentsStudent> ParentsStudents { get; set; }
        public virtual ICollection<Remark> Remarks { get; set; }
    }
}
