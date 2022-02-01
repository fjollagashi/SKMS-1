using System.Text;
using System;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace BusinessLogic.AuthHelpers {
    public class JwtService : IJwtService {
        private string SecurityKey = "ku mbete ti alo, ku mbete ti lajmro";

        public string Generate(Guid userId) {

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecurityKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            var payload = new JwtPayload(userId.ToString(), null, null, null, DateTime.Today.AddDays(1));
            var securityToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);

            }

        public JwtSecurityToken Verify(string jwt) {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(SecurityKey);

            tokenHandler.ValidateToken(jwt, new TokenValidationParameters {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateAudience = false,
                ValidateIssuer = false
                }
            , out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;
            }


        }
    }