#!/usr/bin/env python3
"""
module for the length of an element
"""
from typing import List, Tuple, Sequence, Any


def element_length(lst: List[Sequence[Any]]) -> List[Tuple[Sequence[Any], int]]:
    return [(i, len(i)) for i in lst]
