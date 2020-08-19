# -*- coding: utf-8 -*-

# install: pip3 install excel2json-3
# run: sh run_excel_to_json_generation.sh

from excel2json import convert_from_file 

if __name__ == "__main__":
    convert_from_file("questions.xlsx")