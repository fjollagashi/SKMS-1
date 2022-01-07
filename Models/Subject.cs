using System;
using System.Collections.Generic;

#nullable disable

namespace Models {
    public partial class Subject {
        public Subject() {
            SubjectsTeachers = new HashSet<SubjectsTeacher>();
            }

        public Guid SubjectId { get; set; }
        public string SubjectName { get; set; }
        public Guid? Curriulum { get; set; }

        public virtual Curriculum CurriulumNavigation { get; set; }
        public virtual ICollection<SubjectsTeacher> SubjectsTeachers { get; set; }
        }
    }
