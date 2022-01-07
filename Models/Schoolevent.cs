using System;
using System.Collections.Generic;

#nullable disable

namespace Models {
    public partial class Schoolevent {
        public Guid EventId { get; set; }
        public string Title { get; set; }
        public string EventDescription { get; set; }
        public DateTime? DateHeld { get; set; }
        public Guid? Category { get; set; }
        public Guid? School { get; set; }

        public virtual Eventcategory CategoryNavigation { get; set; }
        public virtual School SchoolNavigation { get; set; }
        }
    }
