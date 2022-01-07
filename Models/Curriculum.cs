using System;
using System.Collections.Generic;

#nullable disable

namespace Models {
    public partial class Curriculum {
        public Curriculum() {
            Subjects = new HashSet<Subject>();
            }

        public Guid CurriculumId { get; set; }
        public int? Grade { get; set; }
        public Guid? School { get; set; }

        public virtual School SchoolNavigation { get; set; }
        public virtual ICollection<Subject> Subjects { get; set; }
        }
    }
