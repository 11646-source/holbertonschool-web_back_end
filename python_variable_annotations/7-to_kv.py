#!/usr/bin/env python3
"""Module for a tuple"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple with the string k and the square of v.

    Args:
        k (str): The key string.
        v (int | float): The value to square.

    Returns:
        Tuple[str, float]: A tuple containing k and v squared.
    """
    return (k, float(v ** 2))
