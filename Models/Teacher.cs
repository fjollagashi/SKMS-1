using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Models {
    public partial class Teacher {
        public Teacher() {
            Remarks = new HashSet<Remark>();
            SubjectsTeachers = new HashSet<SubjectsTeacher>();
            }

        public Guid TeacherId { get; set; }
        public string AcademicDegree { get; set; }
        public string PhoneNumber { get; set; }
        public string TeacherCategory { get; set; }
        public Guid? School { get; set; }


        public virtual School SchoolNavigation { get; set; }
        public virtual User TeacherNavigation { get; set; }
        public virtual Classgroup Classgroup { get; set; }
        public virtual ICollection<Remark> Remarks { get; set; }
        public virtual ICollection<SubjectsTeacher> SubjectsTeachers { get; set; }
        }
    }
