using System;
using System.Collections.Generic;

#nullable disable

namespace Models {
    public partial class Classgroup {
        public Classgroup() {
            Schedules = new HashSet<Schedule>();
            Students = new HashSet<Student>();
            }

        public Guid GroupId { get; set; }
        public string GroupName { get; set; }
        public int? Grade { get; set; }
        public Guid? Classroom { get; set; }
        public Guid? HomeroomTeacher { get; set; }

        public virtual Classroom ClassroomNavigation { get; set; }
        public virtual Teacher HomeroomTeacherNavigation { get; set; }
        public virtual ICollection<Schedule> Schedules { get; set; }
        public virtual ICollection<Student> Students { get; set; }
        }
    }
