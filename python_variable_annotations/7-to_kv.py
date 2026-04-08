#!/usr/bin/env python3
"""Module for a tuple"""
from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string k and an int or float v,
    returns a tuple 
    """
    return (k, float(v ** 2))

