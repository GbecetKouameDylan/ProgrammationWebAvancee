using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Data.Migrations
{
    /// <inheritdoc />
    public partial class migrati : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "11111111-1111-1111-1111-111111111111");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "11111111-1111-1111-1111-111111111111", 0, "b1fc9efa-eff8-4ae4-9de8-5f647326c1a8", "DemoUser", "jim@test.com", false, false, null, "JIM@TEST.COM", "JIM@TEST.COM", "AQAAAAIAAYagAAAAECdijZuqc6Qo6RP+wug4z7YrWrU81FbucrJS3qrJBHarERZTeB333hXcIUPZMPx9eA==", null, false, "efe73f1a-09ef-4c12-9bb3-7bc376d9dc89", false, "jim@test.com" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "11111111-1111-1111-1111-111111111111",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "0158e262-b13b-4b76-a4a2-88695c5b8cb0", "AQAAAAIAAYagAAAAEDjbBml72zGnCqbHwMLku9UCXHuUBiYtOKfeadktjSH0spfFHAVijKYIT1FijR4TDQ==", "0ecf14ca-ccb7-4fd0-8cf6-87ee1d77e74b" });
        }
    }
}
