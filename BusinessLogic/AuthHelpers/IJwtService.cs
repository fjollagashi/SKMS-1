using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessLogic.AuthHelpers {
    public interface IJwtService {

        public string Generate(Guid userId);

        public JwtSecurityToken Verify(string jwt);

        }
    }
