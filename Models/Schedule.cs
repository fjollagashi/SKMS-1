using System;
using System.Collections.Generic;

#nullable disable

namespace Models {
    public partial class Schedule {
        public Schedule() {
            Periods = new HashSet<Period>();
            }

        public Guid ScheduleId { get; set; }
        public string Timeslot { get; set; }
        public Guid? ClassGroup { get; set; }
        public Guid? School { get; set; }

        public virtual Classgroup ClassGroupNavigation { get; set; }
        public virtual School SchoolNavigation { get; set; }
        public virtual ICollection<Period> Periods { get; set; }
        }
    }
