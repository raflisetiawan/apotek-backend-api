import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as XLSX from 'xlsx';

@Controller('excel')
export class ExcelController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('excel')) // 'excel' adalah nama field file di form-data
  async uploadExcel(@UploadedFile() file) {
    if (!file) {
      return { error: 'Tidak ada file yang diunggah' };
    }

    try {
      const workbook = XLSX.read(file.buffer, { type: 'buffer' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      return jsonData;
    } catch (error) {
      return { error: 'Gagal membaca file Excel' };
    }
  }
}
