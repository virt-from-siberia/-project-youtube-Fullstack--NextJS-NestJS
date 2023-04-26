import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FileEntity } from '../../files/entities/file.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @OneToMany(() => FileEntity, (file) => file.user)
  files: FileEntity[];
}
