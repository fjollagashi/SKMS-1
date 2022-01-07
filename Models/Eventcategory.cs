using System;
using System.Collections.Generic;

#nullable disable

namespace Models {
    public partial class Eventcategory {
        public Eventcategory() {
            Schoolevents = new HashSet<Schoolevent>();
            }

        public Guid CategoryId { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<Schoolevent> Schoolevents { get; set; }
        }
    }
