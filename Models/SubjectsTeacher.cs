using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class SubjectsTeacher
    {
        public SubjectsTeacher()
        {
            Grades = new HashSet<Grade>();
            Periods = new HashSet<Period>();
        }

        public Guid SubjectId { get; set; }
        public Guid TeacherId { get; set; }

        public virtual Subject Subject { get; set; }
        public virtual Teacher Teacher { get; set; }
        public virtual ICollection<Grade> Grades { get; set; }
        public virtual ICollection<Period> Periods { get; set; }
    }
}
