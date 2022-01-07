using System;
using System.Collections.Generic;

#nullable disable

namespace Models {
    public partial class Classroom {
        public Classroom() {
            Classgroups = new HashSet<Classgroup>();
            }

        public Guid ClassroomId { get; set; }
        public string ClassroomName { get; set; }
        public int? Capacity { get; set; }
        public Guid? School { get; set; }

        public virtual School SchoolNavigation { get; set; }
        public virtual ICollection<Classgroup> Classgroups { get; set; }
        }
    }
