<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191220145525 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE basic_page_image_file (basic_page_id INT NOT NULL, image_file_id INT NOT NULL, INDEX IDX_8C80DD85E0DCF229 (basic_page_id), INDEX IDX_8C80DD856DB2EB0 (image_file_id), PRIMARY KEY(basic_page_id, image_file_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE basic_page_image_file ADD CONSTRAINT FK_8C80DD85E0DCF229 FOREIGN KEY (basic_page_id) REFERENCES basic_page (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE basic_page_image_file ADD CONSTRAINT FK_8C80DD856DB2EB0 FOREIGN KEY (image_file_id) REFERENCES image_file (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE team_member CHANGE position_de position_de VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE basic_page_image_file');
        $this->addSql('ALTER TABLE team_member CHANGE position_de position_de VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
