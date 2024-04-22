using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackgroundService.Migrations
{
    /// <inheritdoc />
    public partial class NbClicks2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NbClicks",
                table: "Player",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NbClicks",
                table: "Player");
        }
    }
}
