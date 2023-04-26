import { Controller, UseInterceptors, UploadedFile, Post, ParseFilePipe, MaxFileSizeValidator } from "@nestjs/common";
import { ApiTags, ApiConsumes, ApiBody } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesService } from "./files.service";
import { fileStorage } from "./storage";


@Controller("files")
@ApiTags("users")
export class FilesController {
  constructor(private readonly filesService: FilesService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor("file", {
    storage: fileStorage
  }))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary"
        }
      }
    }
  })
  create(@UploadedFile(new ParseFilePipe({
      validators: [new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })]
    }
  )) file: Express.Multer.File) {
    return file;
  }
}
