<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191117043403 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE blog_entry (id INT AUTO_INCREMENT NOT NULL, title_en VARCHAR(255) NOT NULL, title_es VARCHAR(255) NOT NULL, title_de VARCHAR(255) NOT NULL, text_at_beginning_en LONGTEXT NOT NULL, text_at_ending_en LONGTEXT DEFAULT NULL, text_at_beginning_de LONGTEXT NOT NULL, text_at_ending_de LONGTEXT DEFAULT NULL, text_at_beginning_es LONGTEXT NOT NULL, text_at_ending_es LONGTEXT DEFAULT NULL, path VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE blog_entry_image_file (blog_entry_id INT NOT NULL, image_file_id INT NOT NULL, INDEX IDX_920CBE5ACE6B6D65 (blog_entry_id), INDEX IDX_920CBE5A6DB2EB0 (image_file_id), PRIMARY KEY(blog_entry_id, image_file_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image_file (id INT AUTO_INCREMENT NOT NULL, description VARCHAR(255) DEFAULT NULL, name VARCHAR(255) NOT NULL, path VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE blog_entry_image_file ADD CONSTRAINT FK_920CBE5ACE6B6D65 FOREIGN KEY (blog_entry_id) REFERENCES blog_entry (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE blog_entry_image_file ADD CONSTRAINT FK_920CBE5A6DB2EB0 FOREIGN KEY (image_file_id) REFERENCES image_file (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE blog_entry_image_file DROP FOREIGN KEY FK_920CBE5ACE6B6D65');
        $this->addSql('ALTER TABLE blog_entry_image_file DROP FOREIGN KEY FK_920CBE5A6DB2EB0');
        $this->addSql('DROP TABLE blog_entry');
        $this->addSql('DROP TABLE blog_entry_image_file');
        $this->addSql('DROP TABLE image_file');
    }
}
